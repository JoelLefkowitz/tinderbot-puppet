from django.db.models import CharField, DateTimeField, Model


class Match(Model):
    created = DateTimeField(auto_now_add=True)
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
        
