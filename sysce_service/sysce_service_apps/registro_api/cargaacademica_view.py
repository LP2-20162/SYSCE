from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from sysce_service_apps.registro.models.cargaAcademica import CargaAcademica


class CargaAcademicaSerializer(serializers.ModelSerializer):

    salon = serializers.ReadOnlyField(source='salon.nivel')
    curso = serializers.ReadOnlyField(source='curso.curso')

    class Meta:
        model = CargaAcademica
        fields = '__all__'


class CargaAcademicaViewSet(viewsets.ModelViewSet):
    queryset = CargaAcademica.objects.all()
    serializer_class = CargaAcademicaSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(persona__nombre__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
