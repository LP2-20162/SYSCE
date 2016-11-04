from rest_framework import serializers, viewsets
from sysce_service_apps.registro.models.colegio import Colegio


class ColegioSerializer(serializers.ModelSerializer):

    class Meta:

        fields = '__all__'
        model = Colegio


class ColegioViewSet(viewsets.ModelViewSet):
    queryset = Colegio.objects.all()
    serializer_class = ColegioSerializer
