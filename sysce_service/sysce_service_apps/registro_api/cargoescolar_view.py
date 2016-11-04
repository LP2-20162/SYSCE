from rest_framework import serializers, viewsets
from sysce_service_apps.registro.models.cargoEscolar import CargoEscolar


class CargoEscolarSerializer(serializers.ModelSerializer):

    class Meta:

        fields = '__all__'
        model = CargoEscolar


class CargoEscolarViewSet(viewsets.ModelViewSet):
    queryset = CargoEscolar.objects.all()
    serializer_class = CargoEscolarSerializer
