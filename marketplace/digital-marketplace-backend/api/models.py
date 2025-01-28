from django.db import models

class Product(models.Model):
    PRODUCT_CATEGORIES = [
        ('course', 'Course'),
        ('ebook', 'Ebook'),
        ('reel', 'Reel'),
        ('data_lead', 'Data Lead'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=PRODUCT_CATEGORIES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

