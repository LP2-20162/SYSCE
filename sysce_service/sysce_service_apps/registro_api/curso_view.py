from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from sysce_service_apps.registro.models.curso import Curso


class CursoSerializer(serializers.ModelSerializer):

    named = serializers.ReadOnlyField(source='persona.nombre')

    class Meta:

        fields = '__all__'
        model = Curso


class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(curso__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
