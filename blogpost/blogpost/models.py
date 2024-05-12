from django.db import models

class BlogPost(models.Model):
    title=models.CharField(max_length=255,primary_key=True)
    body=models.TextField()
    
    class Meta:
       managed=False
       db_table='blog_post'
        