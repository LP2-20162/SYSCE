from rest_framework import serializers, viewsets
from sysce_service_apps.registro.models.alumno import Alumno


class AlumnoSerializer(serializers.ModelSerializer):

    class Meta:

        fields = '__all__'
        model = Alumno


class AlumnoViewSet(viewsets.ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer
