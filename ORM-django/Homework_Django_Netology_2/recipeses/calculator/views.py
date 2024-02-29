from django.shortcuts import render
from django.http import HttpResponse

DATA = {
    "omlet": {
        "яйца, шт": 2,
        "молоко, л": 0.1,
        "соль, ч.л.": 0.5,
    },
    "pasta": {
        "макароны, г": 0.3,
        "сыр, г": 0.05,
    },
    "buter": {
        "хлеб, ломтик": 1,
        "колбаса, ломтик": 1,
        "сыр, ломтик": 1,
        "помидор, ломтик": 1,
    },
}


def recipe_view(request, recipe_name):
    servings = int(request.GET.get('servings', 1))
    recipe_data = DATA.get(recipe_name)
    if recipe_data:
        context = {'recipe': {}}
        for ingredient, amount in recipe_data.items():
            context['recipe'][ingredient] = amount * servings
        return render(request,'calculator/index.html', context)
    else:
        return HttpResponse('Такого рецепта не знаю :(')

