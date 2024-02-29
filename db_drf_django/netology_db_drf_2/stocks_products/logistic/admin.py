from django.contrib import admin
from logistic.models import Stock,StockProduct,Product
# Register your models here.
admin.site.register(Stock)
admin.site.register(StockProduct)
admin.site.register(Product)
