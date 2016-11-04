from rest_framework import serializers, viewsets
from sysce_service_apps.registro.models.docente import Docente


class DocenteSerializer(serializers.ModelSerializer):

    class Meta:

        fields = '__all__'
        model = Docente


class DocenteViewSet(viewsets.ModelViewSet):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer
