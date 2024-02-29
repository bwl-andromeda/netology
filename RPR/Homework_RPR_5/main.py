import os
import datetime


def logger(filename):
    def _logger(old_function):
        def new_function(*args, **kwargs):
            with open(filename, "a") as file:
                data_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                name_func = old_function.__name__
                arguments = (
                    f"Аргументы функции {name_func} - args{args}, kwargs{kwargs}"
                )
                file.write(f"{data_time} - {name_func}({arguments})\n")
                result = old_function(*args, **kwargs)
                file.write(f"Возвращённое значение: {result}\n\n")

                return result

        return new_function

    return _logger


def logger_2(old_function):
    def new_function(*args, **kwargs):
        with open("main.log", "a") as file:
            data_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            name_func = old_function.__name__
            arguments = f"Аргументы функции {name_func} - args{args}, kwargs{kwargs}"
            file.write(f"{data_time} - {name_func}({arguments})\n")
            result = old_function(*args, **kwargs)
            file.write(f"Возвращённое значение: {result}\n\n")

            return result

    return new_function


def test_1():
    path = "main.log"
    if os.path.exists(path):
        os.remove(path)

    @logger_2
    def hello_world():
        return "Hello World"

    @logger_2
    def summator(a, b=0):
        return a + b

    @logger_2
    def div(a, b):
        return a / b

    assert "Hello World" == hello_world(), "Функция возвращает 'Hello World'"
    result = summator(2, 2)
    assert isinstance(result, int), "Должно вернуться целое число"
    assert result == 4, "2 + 2 = 4"
    result = div(6, 2)
    assert result == 3, "6 / 2 = 3"

    assert os.path.exists(path), "файл main.log должен существовать"

    summator(4.3, b=2.2)
    summator(a=0, b=0)

    with open(path) as log_file:
        log_file_content = log_file.read()

    assert "summator" in log_file_content, "должно записаться имя функции"
    for item in (4.3, 2.2, 6.5):
        assert str(item) in log_file_content, f"{item} должен быть записан в файл"


def test_2():
    paths = ("log_1.log", "log_2.log", "log_3.log")

    for path in paths:
        if os.path.exists(path):
            os.remove(path)

        @logger(path)
        def hello_world():
            return "Hello World"

        @logger(path)
        def summator(a, b=0):
            return a + b

        @logger(path)
        def div(a, b):
            return a / b

        assert "Hello World" == hello_world(), "Функция возвращает 'Hello World'"
        result = summator(2, 2)
        assert isinstance(result, int), "Должно вернуться целое число"
        assert result == 4, "2 + 2 = 4"
        result = div(6, 2)
        assert result == 3, "6 / 2 = 3"
        summator(4.3, b=2.2)

    for path in paths:
        assert os.path.exists(path), f"файл {path} должен существовать"

        with open(path) as log_file:
            log_file_content = log_file.read()

        assert "summator" in log_file_content, "должно записаться имя функции"

        for item in (4.3, 2.2, 6.5):
            assert str(item) in log_file_content, f"{item} должен быть записан в файл"


if __name__ == "__main__":
    test_1()
    test_2()
