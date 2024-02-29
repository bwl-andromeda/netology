import psycopg2

import os

def create_tables():
    conn = psycopg2.connect(database="homework-3", user="postgres")
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS clients (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            email VARCHAR(100),
            phone VARCHAR(20)[]
        );
    """)

    conn.commit()
    conn.close()

def add_client(first_name, last_name, email, phone=None):
    conn = psycopg2.connect(database="homework-3", user="postgres" )
    cursor = conn.cursor()

    if phone is None:
        phone = []

    cursor.execute("""
        INSERT INTO clients (first_name, last_name, email, phone)
        VALUES (%s, %s, %s, %s)
        RETURNING id;
    """, (first_name, last_name, email, phone))

    client_id = cursor.fetchone()[0]
    conn.commit()
    conn.close()

    return client_id

def add_phone(client_id, phone):
    conn = psycopg2.connect(database="homework-3", user="postgres" )
    cursor = conn.cursor()

    cursor.execute("""
        UPDATE clients
        SET phone = array_append(phone, %s)
        WHERE id = %s;
    """, (phone, client_id))

    conn.commit()
    conn.close()

def update_client(client_id, first_name=None, last_name=None, email=None):
    conn = psycopg2.connect(database="homework-3", user="postgres")
    cursor = conn.cursor()

    update_query = "UPDATE clients SET"
    update_params = []

    if first_name:
        update_query += " first_name = %s,"
        update_params.append(first_name)

    if last_name:
        update_query += " last_name = %s,"
        update_params.append(last_name)

    if email:
        update_query += " email = %s,"
        update_params.append(email)

    update_query = update_query.rstrip(",")

    update_query += " WHERE id = %s;"
    update_params.append(client_id)

    cursor.execute(update_query, update_params)

    conn.commit()
    conn.close()

def remove_phone(client_id, phone):
    conn = psycopg2.connect(database="homework-3", user="postgres")
    cursor = conn.cursor()

    cursor.execute("""
        UPDATE clients
        SET phone = array_remove(phone, %s)
        WHERE id = %s;
    """, (phone, client_id))

    conn.commit()
    conn.close()

def delete_client(client_id):
    conn = psycopg2.connect(database="homework-3", user="postgres")
    cursor = conn.cursor()

    cursor.execute("""
        DELETE FROM clients
        WHERE id = %s;
    """, (client_id,))

    conn.commit()
    conn.close()

def find_clients(query):
    conn = psycopg2.connect(database="homework-3", user="postgres")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT * FROM clients
        WHERE first_name ILIKE %s
        OR last_name ILIKE %s
        OR email ILIKE %s
        OR phone::text[] @> ARRAY[%s]::text[];
    """, (query, query, query, query))

    rows = cursor.fetchall()
    conn.close()

    return rows

def get_all_clients():
    conn = psycopg2.connect(database="homework-3", user="postgres")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT * FROM clients;
    """)

    rows = cursor.fetchall()
    conn.close()

    return rows

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def menu():
    while True:
        clear_terminal()
        print("МЕНЮ ДЛЯ РАБОТЫ С КЛИЕНТАМИ:")
        print("1. Добавить нового клиента")
        print("2. Добавить телефон клиенту")
        print("3. Обновить данные клиента")
        print("4. Удалить телефон клиента")
        print("5. Удалить клиента")
        print("6. Найти клиента")
        print("7. Вывести список всех клиентов")
        print("0. Выйти")

        choice = input("Введите число: ")

        if choice == "1":
            create_client()
        elif choice == "2":
            add_client_phone()
        elif choice == "3":
            update_client_data()
        elif choice == "4":
            remove_client_phone()
        elif choice == "5":
            remove_client()
        elif choice == "6":
            find_client()
        elif choice == "7":
            list_clients()
        elif choice == "0":
            break
        else:
            print("Неверно введено число. Попробуйте еще раз.")
            input("Нажмите Enter для продолжения...")

def create_client():
    first_name = input("Введите имя клиента: ")
    last_name = input("Введите фамилию клиента: ")
    email = input("Введите email клиента: ")
    phone = input("Введите телефон клиента (если несколько, то через запятую): ")
    phone = phone.split(',') if phone else None

    client_id = add_client(first_name, last_name, email, phone)

    print(f"Клиент успешно добавлен (id={client_id})")
    input("Нажмите Enter для продолжения...")

def add_client_phone():
    client_id = input("Введите id клиента: ")
    phone = input("Введите телефон клиента для добавления: ")

    add_phone(client_id, phone)

    print("Телефон успешно добавлен")
    input("Нажмите Enter для продолжения...")

def update_client_data():
    client_id = input("Введите id клиента: ")
    first_name = input("Введите новое имя клиента (если не менять, то оставьте пустым): ")
    last_name = input("Введите новую фамилию клиента (если не менять, то оставьте пустым): ")
    email = input("Введите новый email клиента (если не менять, то оставьте пустым): ")

    update_client(client_id, first_name, last_name, email)

    print("Данные клиента успешно обновлены")
    input("Нажмите Enter для продолжения...")

def remove_client_phone():
    client_id = input("Введите id клиента: ")
    phone = input("Введите телефон для удаления: ")

    remove_phone(client_id, phone)

    print("Телефон успешно удален")
    input("Нажмите Enter для продолжения...")

def remove_client():
    client_id = input("Введите id клиента для удаления: ")

    delete_client(client_id)

    print("Клиент успешно удален")
    input("Нажмите Enter для продолжения...")

def find_client():
    query = input("Введите запрос для поиска: ")

    rows = find_clients(query)

    if rows:
        print("Результат поиска:")
        for row in rows:
            print(f"ID: {row[0]}")
            print(f"Имя: {row[1]}")
            print(f"Фамилия: {row[2]}")
            print(f"Email: {row[3]}")
            print(f"Телефоны: {', '.join(row[4]) if row[4] else 'Не указаны'}")
            print("-----------")
    else:
        print("Ничего не найдено")
    input("Нажмите Enter для продолжения...")

def list_clients():
    rows = get_all_clients()

    if rows:
        print("Список всех клиентов:")
        for row in rows:
            print(f"ID: {row[0]}")
            print(f"Имя: {row[1]}")
            print(f"Фамилия: {row[2]}")
            print(f"Email: {row[3]}")
            print(f"Телефоны: {', '.join(row[4]) if row[4] else 'Не указаны'}")
            print("-----------")
    else:
        print("Нет ни одного клиента")
    input("Нажмите Enter для продолжения...")

if __name__ == "__main__":
    create_tables()
    menu()
