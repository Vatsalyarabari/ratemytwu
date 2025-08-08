import strawberry
from typing import List

@strawberry.type
class Professor:
    id: int
    name: str
    department: str
    average_rating: float

@strawberry.type
class Query:
    @strawberry.field
    def professors(self) -> List[Professor]:
        # Placeholder: Replace with database query
        return [
            Professor(id=1, name="Andrew Fucking Park ", department="Computer Science", average_rating=0.5)
        ]

schema = strawberry.Schema(query=Query)