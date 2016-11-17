from uuid import uuid4
from django.db import models
from .persona import Persona
from .cargoEscolar import CargoEscolar
from .cargaAcademica import CargaAcademica
from .colegio import Colegio
#from .categoria import Categoria
#from .autor import Autor
#from ..enums import LIBRO_TIPO_CHOICES, FISICO


class Alumno(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    estado = models.BooleanField(default=False)
    persona = models.ForeignKey('Persona')
    cargoEscolar = models.ForeignKey('CargoEscolar')
    cargaAcademica = models.ManyToManyField('CargaAcademica')
    colegio = models.ForeignKey('Colegio')

    class Meta:
        verbose_name = "Alumno"
        verbose_name_plural = "Alumnos"

    def __str__(self):
        return '%s ' % (self.estado)
