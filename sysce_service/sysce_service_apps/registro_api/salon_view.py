from rest_framework import serializers, viewsets
from sysce_service_apps.registro.models.salon import Salon


class SalonSerializer(serializers.ModelSerializer):

    class Meta:

        fields = '__all__'
        model = Salon


class SalonViewSet(viewsets.ModelViewSet):
    queryset = Salon.objects.all()
    serializer_class = SalonSerializer
