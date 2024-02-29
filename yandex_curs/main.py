import requests
from TOKEN import TOKEN
from datetime import datetime
import os
from tqdm import tqdm
import time
import shutil

def get_req(id):
    print("-" * 145)
    url = "https://api.vk.com/method/photos.get"
    req = requests.get(f'{url}?owner_id={id}&album_id=profile&rev=0&extended=1&count=100&access_token={TOKEN}&v=5.131').json()
    

    str_photos = "wzyrqpoxms"
    global file_dict
    file_dict = {}
    list = req['response']['items']

    print("Создание словаря...")
    for photo in tqdm(list):
        time.sleep(0.001)
        if photo['likes']['count'] not in file_dict:
            file_name = photo['likes']['count']
        else:
            file_name = f"{photo['likes']['count']}_date_{(datetime.utcfromtimestamp(photo['date']).strftime('%d-%m-%Y_%H-%M-%S'))}"

        max_size = 0
        for size in tqdm(photo["sizes"]):
            time.sleep(0.4)
            counter = 9
            if size["height"] > 0:
                if size["height"] > max_size:
                    file_dict[file_name] = {'url':size['url'],'type':size['type']}
                    max_size = size["height"]
            else:
                if str_photos.index(size["type"]) < counter:
                    file_dict[file_name] = {'url':size['url'],'type':size['type']}
                    counter = str_photos.index(size["type"])
    

        
    
def download_url(name_file):
    print("Создание папки для фоток с вк...")
    os.mkdir(name_file)
    print("-" * 145)
    print("Скачивание фотографий с вк в папку...")
    for i in tqdm(file_dict):
        time.sleep(0.1)
        url = file_dict[i]["url"]
        r = requests.get(url,stream=True)
        with open(f"{name_file}/{i}.jpg",'wb') as new_file:
            for new in r.iter_content(chunk_size=4096*50):
                    new_file.write(new)


    print("-" * 145)
    print("Фотки были успешно загружены на ПК")



def load_photo_in_yandex(TOKEN_YANDEX,name_file,name):
    headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': f'OAuth {TOKEN_YANDEX}'}
    url = 'https://cloud-api.yandex.net:443/v1/disk/resources'
    requests.put(f'{url}?path={name}',headers=headers)
    for _,_,filenames in os.walk(name_file):
        for file in tqdm(filenames):
            res = requests.get(f'{url}/upload?path={name}/{file}',headers=headers).json()
            with open(f'{name_file}/{file}','rb') as f:
                try:
                    requests.put(res["href"],files={'file':f})
                    print(f' Файл {file} загружен ')
                    print("-" * 145)
                    time.sleep(0.1)
                except KeyError:
                    print(" Error")
    



    print("Очистка кеша...")
    shutil.rmtree(name_file)
    print("-" * 145)
    print('Программа заверешена...')
            
                
            


if __name__ == "__main__":
    get_req(input("Введите пожалуйста ваш id: "))
    download_url(input("Введите название папки которая будет создана для скачки фотографий с ВК в неё: "))
    load_photo_in_yandex(input("Введите пожалуйста ваш токен: "),input("Введите локальную папку: "),
                         input("Введите название папки которая будет создана на ЯД: "))