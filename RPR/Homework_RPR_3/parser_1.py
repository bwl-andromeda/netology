import json
import re
import requests
from fake_headers import Headers
import bs4
from tqdm import tqdm

all_dict = {}
count = 0
for i in tqdm(range(100),desc="Поиск записей..."):
    headers_data = Headers(browser="Chrome", os="win").generate()
    main_page_html = requests.get(
        f"https://spb.hh.ru/search/vacancy?no_magic=true&L_save_area=true&text=python+django+flask&excluded_text=&area=2&area=1&salary=&currency_code=RUR&experience=doesNotMatter&order_by=relevance&search_period=0&items_on_page=20&page={i}",
        headers=headers_data,
    ).text
    main_page_soup = bs4.BeautifulSoup(main_page_html, "lxml")

    div_article_list_tag = main_page_soup.find(
        "div", class_="HH-MainContent HH-Supernova-MainContent"
    )
    article_tags = div_article_list_tag.find_all(class_="vacancy-serp-item-body")
    for article_tag in article_tags:
        h3_tag = article_tag.find("h3")
        title = h3_tag.text

        a_tag = h3_tag.find("a")
        href = a_tag["href"]

        salary_tag = article_tag.find("span", class_="bloko-header-section-3")
        if salary_tag is not None:
            salary_1 = salary_tag.text
            pattern = re.compile(r'\u202f')
            repl = ' '
            salary = re.sub(pattern, repl, salary_1)
        else:
            salary = "Данные не найдены..."

        company_tag = article_tag.find("div", class_="vacancy-serp-item-company")
        a_company_tag = company_tag.find("a")
        company_name = a_company_tag.text
        company = re.sub(r'\s+', ' ', company_name).strip()

        location_tag = company_tag.find("div")

        city = location_tag.find(
            class_="bloko-text", attrs={"data-qa": "vacancy-serp__vacancy-address"}
        ).text.split(",")[0]
        try:
            count += 1
            all_dict.update(
                {
                    title: [
                        {
                            "link": href,
                            "salary": salary,
                            "company": company,
                            "city": city,
                        }
                    ]
                }
            )
        except AttributeError:
            count += 1
            all_dict.update(
                {
                    title: [
                        {
                            "link": href,
                            "salary": salary,
                            "company": company,
                            "city": city,
                        }
                    ]
                }
            )
with open("data.json", "w", encoding="utf-8") as file:
    json.dump(all_dict, file, ensure_ascii=False, indent=4)
print(f'Кол-во найденых вакансий: {count}')
