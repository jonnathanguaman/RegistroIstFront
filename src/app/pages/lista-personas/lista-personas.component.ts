import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../services/persona/persona';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent implements OnInit {
  
  constructor(private readonly personaService:PersonaService){}
  
  personas!:Persona[]
  
  ngOnInit(): void {
    this.personaService.obtenerPersonasRegistradas().subscribe({
      next:(personas)=>{
        this.personas = personas
      },
      error:()=>{
        alert("No se han podido cargar los fatos")
      }
    })
  }

  generatePDF() {
    const doc = new jsPDF('l', 'mm', 'a4');

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text('Lista de Personas', 14, 15);
  
    const headers = [['Nombre', 'Apellido', 'Carrera', 'Cédula', 'Celular', 'Correo electrónico']];
    const data = this.personas.map(persona => [
      persona.nombre, 
      persona.apellido, 
      persona.carrera, 
      persona.cedula, 
      persona.celular, 
      persona.email
    ]);
  
    autoTable(doc, {
      head: headers,
      body: data,
      startY: 25,
      theme: 'grid',
      headStyles: { fillColor: [0, 102, 255], textColor: [255, 255, 255], halign: 'center' },
      styles: { fontSize: 10, cellPadding: 3 },
      columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 35 }, 2: { cellWidth: 70 }, 3: { cellWidth: 30 }, 4: { cellWidth: 30 }, 5: { cellWidth: 60 } }
    });
  
    doc.save('lista_personas.pdf');
  }
  

}
