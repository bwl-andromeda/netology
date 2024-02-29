from django.contrib import admin
from django.forms import BaseInlineFormSet
from .models import Article,Scope,Tag
from django.core.exceptions import ValidationError


class ScopeInlineFormSet(BaseInlineFormSet):

    def clean(self):
        main_count = sum(form.cleaned_data['is_main'] for form in self.forms)
        if main_count != 1:
            raise ValidationError('Должна быть ровно один основной раздел')
        return super().clean()

class ScopeInline(admin.TabularInline):
    model = Scope
    formset = ScopeInlineFormSet
    extra = 0

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    inlines = [ScopeInline]

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['id','name']
