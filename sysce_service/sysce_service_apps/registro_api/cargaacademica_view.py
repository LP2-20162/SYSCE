from rest_framework import serializers, viewsets
from sysce_service_apps.registro.models.cargaAcademica import CargaAcademica


class CargaAcademicaSerializer(serializers.ModelSerializer):
     
     salon_nombre= serializers.ReadOnlyField(
        source='salon.nombre')
     curso_nombre = serializers.ReadOnlyField(
        source='curso.nombre')

    
    class Meta:

        fields = '__all__'
        model = CargaAcademica


class CargoAcademicaViewSet(viewsets.ModelViewSet):
    queryset = CargaAcademica.objects.all()
    serializer_class = CargaAcademicaSerializer
