from django.contrib import admin
from .models.persona import Persona
from .models.alumno import Alumno
from .models.apoderado import Apoderado
from .models.docente import Docente
from .models.salon import Salon
from .models.curso import Curso
from .models.colegio import Colegio
from .models.cargoEscolar import CargoEscolar
from .models.cargaAcademica import CargaAcademica
from .models.asistencia import Asistencia
from .models.actividadEscolar import ActividadEscolar
from .models.actividadColegio import ActividadColegio
# Register your models here.


class PersonaAdmin(admin.ModelAdmin):
    list_display = ("nombre", "apellido_paterno", "apellido_materno", )
    search_fields = ("nombre", "apellido_paterno",)

admin.site.register(Persona, PersonaAdmin)


class DocenteAdmin(admin.ModelAdmin):
    list_display = ("id", "especialidad", "estado", "persona",)
    search_fields = ("id", "especialidad", "estado", "persona",)

admin.site.register(Docente, DocenteAdmin)


class ApoderadoteAdmin(admin.ModelAdmin):
    list_display = ("persona", "estado", )
    search_fields = ("persona", "estado", )

admin.site.register(Apoderado, ApoderadoteAdmin)


class AlumnoAdmin(admin.ModelAdmin):
    list_display = ("estado", "persona", "colegio",)
    search_fields = ("estado", "persona", "cargoEscolar",
                     "cargaAcademica", "colegio",)

admin.site.register(Alumno, AlumnoAdmin)


class CursoAdmin(admin.ModelAdmin):
    list_display = ("nombre", "horas", "estado",
                    "docente",)
    search_fields = ("docente", "horas", "estado",
                     "docente",)

admin.site.register(Curso, CursoAdmin)


class SalonAdmin(admin.ModelAdmin):
    list_display = ("nombre", "ubicacion",)
    search_fields = ("nombre", "ubicacion",)

admin.site.register(Salon, SalonAdmin)


class ColegioAdmin(admin.ModelAdmin):
    list_display = ("nombre", "direccion", "departamento", "provincia", "distrito", "telefono_1",
                    "telefono_2", "descripcion",)
    search_fields = ("nombre", "direccion", "departamento", "provincia", "distrito", "telefono_1",
                     "telefono_2", "descripcion",)

admin.site.register(Colegio, ColegioAdmin)


class CargaAcademicaAdmin(admin.ModelAdmin):
    list_display = ("estado", "curso", "salon",)
    search_fields = ("estado", "curso", "salon",)

admin.site.register(CargaAcademica, CargaAcademicaAdmin)


class AsistenciaAdmin(admin.ModelAdmin):
    list_display = ("alumno", "fecha", "hora", "curso", "asiste",)
    search_fields = ("alumno", "fecha", "hora", "curso", "asiste", )

admin.site.register(Asistencia, AsistenciaAdmin)


class CargoEscolarAdmin(admin.ModelAdmin):
    list_display = ("nombre", "tipo", )
    search_fields = ("nombre", "tipo", )

admin.site.register(CargoEscolar, CargoEscolarAdmin)


class ActividadColegioAdmin(admin.ModelAdmin):
    list_display = ("nombre", "descripcion", "fecha_emicion",
                    "fecha_actividad", "estado", )
    search_fields = ("nombre", "descripcion", "fecha_emicion",
                     "fecha_actividad", "estado",)

admin.site.register(ActividadColegio, ActividadColegioAdmin)


class ActividadEscolarAdmin(admin.ModelAdmin):
    list_display = ("curso", "nombre", "descripcion", "fecha_emicion",
                    "fecha_actividad", "estado", )
    search_fields = ("curso", "nombre", "descripcion", "fecha_emicion",
                     "fecha_actividad", "estado",)

admin.site.register(ActividadEscolar, ActividadEscolarAdmin)
