from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('vendor', 'Vendor'),
        ('user', 'User'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')

    def __str__(self):
        return self.username

class Product(models.Model):
    PRODUCT_CATEGORIES = [
        ('tshirt', 'T-Shirt'),
        ('hoodie', 'Hoodie'),
        ('cap', 'Cap'),
        ('mug', 'Mug'),
        ('sticker', 'Sticker'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=PRODUCT_CATEGORIES)
    image = models.ImageField(upload_to='product_images/')  # Store product images
    stock = models.PositiveIntegerField(default=0)  # Available stock
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
