from rest_framework import serializers, viewsets
from sysce_service_apps.registro.models.curso import Curso


class CursoSerializer(serializers.ModelSerializer):

    class Meta:

        fields = '__all__'
        model = Curso


class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
