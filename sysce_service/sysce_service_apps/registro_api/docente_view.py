from rest_framework import serializers, viewsets
#from django.db.models import Q
#from operator import __or__ as OR

#from functools import reduce

from sysce_service_apps.registro.models.docente import Docente


class DocenteSerializer(serializers.ModelSerializer):

    ndocente = serializers.ReadOnlyField(source='persona.nombre')

    class Meta:
        model = Docente
        fields = '__all__'


class DocenteViewSet(viewsets.ModelViewSet):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer

    # def get_queryset(self):
#        query = self.request.query_params.get('query', '')
 #       queryall = (Q(id__icontains=query),
  #                  Q(persona__icontains=query))
   #     queryset = self.queryset.filter(reduce(OR, queryall))
    #   return queryset
