from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.urls import resolve

class BlogPostAPIView(APIView):
    def post(self,request,*args,**kwargs):
        serializer=BlogPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"Blog Saved Successfully"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class BlogGetAPIView(APIView):    
    def get(self,request,*args,**kwargs):
        blogposts=BlogPost.objects.all()
        serializer=BlogPostSerializer(blogposts,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
