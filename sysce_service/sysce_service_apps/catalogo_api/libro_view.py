from rest_framework import serializers, viewsets
from sysce_service_apps.catalogo.models.libro import Libro


class LibroSerializer(serializers.ModelSerializer):

    class Meta:

        fields = '__all__'
        model = Libro


class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
