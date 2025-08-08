from sqlalchemy import Column, Integer, String, Float
from app.database import Base

class ProfessorModel(Base):
    __tablename__ = "professors"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    department = Column(String)
    average_rating = Column(Float, default=0.0)