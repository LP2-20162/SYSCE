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

# Register your models here.


class PersonaAdmin(admin.ModelAdmin):
    list_display = ("nombre", "apellido_paterno", "apellido_materno",
                    "dni", "telefono", "email", "fecha_nacimiento", "lugar_nacimiento",)
    search_fields = ("nombre", "apellido_paterno", "apellido_materno", "dni", "telefono",
                     "email", "fecha_nacimiento", "lugar_nacimiento",)

admin.site.register(Persona, PersonaAdmin)


class DocenteAdmin(admin.ModelAdmin):
    list_display = ("id", "persona", "especialidad", "estado", )
    search_fields = ("id", "persona", "especialidad", "estado", "persona",)

admin.site.register(Docente, DocenteAdmin)


class ApoderadoteAdmin(admin.ModelAdmin):
    list_display = ("persona", "estado", )
    search_fields = ("persona", "estado", )

admin.site.register(Apoderado, ApoderadoteAdmin)


class AlumnoAdmin(admin.ModelAdmin):
    list_display = ("persona", "cargaAcademica",
                    "cargoEscolar", "estado",  "colegio",)
    search_fields = ("persona", "cargaAcademica", "cargoEscolar", "estado",
                     "colegio",)

admin.site.register(Alumno, AlumnoAdmin)


class CursoAdmin(admin.ModelAdmin):
    list_display = ("curso", "docente", "horas", "estado",
                    )
    search_fields = ("curso", "docente", "horas", "estado",
                     )

admin.site.register(Curso, CursoAdmin)


class SalonAdmin(admin.ModelAdmin):
    list_display = ("nivel", "grado", "seccion", "ubicacion",)
    search_fields = ("nivel", "grado", "seccion", "ubicacion",)

admin.site.register(Salon, SalonAdmin)


class ColegioAdmin(admin.ModelAdmin):
    list_display = ("nombre", "direccion", "departamento", "provincia", "distrito",
                    "telefono", "descripcion",)
    search_fields = ("nombre", "direccion", "departamento", "provincia", "distrito",
                     "telefono", "descripcion")

admin.site.register(Colegio, ColegioAdmin)


class CargaAcademicaAdmin(admin.ModelAdmin):
    list_display = ("salon", "estado",)
    search_fields = ("salon", "curso", "estado",)

admin.site.register(CargaAcademica, CargaAcademicaAdmin)


class AsistenciaAdmin(admin.ModelAdmin):
    list_display = ("alumno", "fecha", "hora", "curso", "asistio",)
    search_fields = ("alumno", "fecha", "hora", "curso", "asistio", )

admin.site.register(Asistencia, AsistenciaAdmin)


class CargoEscolarAdmin(admin.ModelAdmin):
    list_display = ("nombre", "tipo", )
    search_fields = ("nombre", "tipo", )

admin.site.register(CargoEscolar, CargoEscolarAdmin)


class ActividadEscolarAdmin(admin.ModelAdmin):
    list_display = ("actividad", "descripcion", "fecha_emicion",
                    "fecha_actividad", "hora_activdad", "estado", )
    search_fields = ("actividad", "descripcion", "fecha_emicion",
                     "fecha_actividad", "hora_activdad", "estado",)

admin.site.register(ActividadEscolar, ActividadEscolarAdmin)
