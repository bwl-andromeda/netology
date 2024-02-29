from django.shortcuts import render
from .models import Article

def articles_list(request):
    articles = Article.objects.all()
    template = 'articles/news.html'
    context = {'object_list': articles}
    return render(request, template, context)