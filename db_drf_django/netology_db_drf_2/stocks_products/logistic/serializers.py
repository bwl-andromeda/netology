# serializers.py

from rest_framework import serializers
from logistic.models import Product, Stock, StockProduct

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title', 'description']
        
class ProductPositionSerializer(serializers.ModelSerializer):
    
    product = ProductSerializer()

    class Meta:
        model = StockProduct
        fields = ['product', 'quantity', 'price']
        
class StockSerializer(serializers.ModelSerializer):
    
    positions = ProductPositionSerializer(many=True, read_only=True)
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Stock
        fields = ['id', 'address', 'positions', 'products']

    def create(self, validated_data):
        positions = validated_data.pop('positions', [])
        stock = Stock.objects.create(**validated_data)
        
        for position_data in positions:
            StockProduct.objects.create(stock=stock, **position_data)
            
        return stock

    def update(self, instance, validated_data):
        positions = validated_data.pop('positions', [])
        
        # удаляем старые связи
        instance.positions.all().delete()
        
        stock = super().update(instance, validated_data)
        
        for position_data in positions:
            StockProduct.objects.create(stock=stock, **position_data)
            
        return stock