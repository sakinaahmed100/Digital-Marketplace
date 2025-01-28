from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price', 'created_at')  # Fields to display in the admin list
    search_fields = ('title', 'category')  # Fields to add a search bar for
    list_filter = ('category', 'created_at')  # Filters for easy navigation
