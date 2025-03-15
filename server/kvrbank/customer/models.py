from django.db import models

# Create your models here.

class customers(models.Model):
    account_number = models.BigIntegerField()
    account_type = models.CharField(max_length=64)
    name = models.CharField(max_length=64)
    date_of_birth = models.DateField()
    email = models.EmailField(max_length=64)
    address = models.CharField(max_length=128)