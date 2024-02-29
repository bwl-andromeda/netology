import pytest
from model_bakery import baker
from rest_framework.test import APIClient
from rest_framework import status

from students.models import Course, Student


@pytest.fixture
def api_client():
    return APIClient()


@pytest.fixture
def course_factory():
    def factory(*args, **kwargs):
        return baker.make(Course, *args, **kwargs)

    return factory


@pytest.fixture
def student_factory():
    def factory(*args, **kwargs):
        return baker.make(Student, *args, **kwargs)


@pytest.mark.django_db
def test_retrieve_course(api_client, course_factory):
    course = course_factory()
    url = f"/api/v1/courses/{course.id}/"
    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK
    assert response.data["id"] == course.id


@pytest.mark.django_db
def test_list_courses(api_client, course_factory):
    course_factory(_quantity=3)
    url = "/api/v1/courses/"
    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 3


@pytest.mark.django_db
def test_filter_courses_by_id(api_client, course_factory):
    course = course_factory()
    other_course = course_factory()
    url = f"/api/v1/courses/?id={course.id}"
    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 1
    assert response.data[0]["id"] == course.id


@pytest.mark.django_db
def test_filter_courses_by_name(api_client, course_factory):
    course = course_factory(name="Math")
    url = f"/api/v1/courses/?name=Math"
    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK
    assert len(response.data) == 1
    assert response.data[0]["name"] == "Math"


@pytest.mark.django_db
def test_create_course(api_client):
    course_data = {
        "name": "New Course",
        "students": []
    }
    response = api_client.post("/api/v1/courses/", course_data, format="json")
    assert response.status_code == status.HTTP_201_CREATED
    assert Course.objects.count() == 1


@pytest.mark.django_db
def test_update_course(api_client, course_factory):
    course = course_factory()
    updated_name = "Updated Course Name"
    url = f"/api/v1/courses/{course.id}/"
    response = api_client.put(url, {"name": updated_name}, format="json")
    assert response.status_code == status.HTTP_200_OK
    course.refresh_from_db()
    assert course.name == updated_name


@pytest.mark.django_db
def test_delete_course(api_client, course_factory):
    course = course_factory()
    url = f"/api/v1/courses/{course.id}/"
    response = api_client.delete(url)
    assert response.status_code == status.HTTP_204_NO_CONTENT
    assert Course.objects.count() == 0
