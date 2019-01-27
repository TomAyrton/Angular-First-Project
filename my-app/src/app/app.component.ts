/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = '';
}*/

import { Component } from '@angular/core';

class Student {
		name: string;
		surname: string;
		patronymic: string;
		dateOfBirth: any;
		averageRating: number;
		removePoint: boolean;
		dateMS: number;
	
		dateParse(newDate: string): any {
					let arr: any[] = newDate.split('.');
					let dateStudent: any = new Date(arr[2] as number, (arr[1] as number - 1), arr[0] as number);
					return dateStudent as number;
				};
		
		constructor(name: string, surname: string, patronymic: string, dateOfBirth: string, averageRating: number, removePoint: boolean) {
				
				this.name = name;
				this.surname = surname;
				this.patronymic = patronymic;
				this.dateOfBirth = dateOfBirth;
				this.averageRating = averageRating;
				this.removePoint = removePoint;
				this.dateMS = this.dateParse(this.dateOfBirth);
		}
}

@Component({
		selector: 'app-root',
		templateUrl: './app.component.html',
		styleUrls: ['./app.component.css']
})

export class AppComponent {
		students: Student[] = [
			new Student ('Евгения', 'Александрова', 'Евгениевна', '31.1.1997', 2.5, false),
			new Student('Иван', 'Евгениев', 'Иванович', '21.7.1995', 3.5, false), 
			new Student('Пётр', 'Иванов', 'Петрович', '5.2.1995', 2.9, false),
			new Student('Дмитрий', 'Петров', 'Дмитриевич', '12.7.1996', 4, false),
			new Student('Дмитрий', 'Дмитриев', 'Дмитриевич', '12.7.1996', 4, false),
			new Student ('Александра', 'Дмитриева', 'Александровна', '14.4.1996', 4.8, false)
		];
		
		lose: boolean = true;
		searchStr: string = '';
		minPoint: number = 0;
		maxPoint: number = 5;
		minDate: string = '1.1.1900';
		maxDate: string = this.parseDate(new Date);
		minDateMS: number = this.parseString(this.minDate);
		maxDateMS: number = this.parseString(this.maxDate);
		overlayDisplay: boolean = false;
		removeStudentName;
	
		parseDate(now): string {
			return now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear()
		}
	
	  removeStudent(student): void {
			this.overlayDisplay = !this.overlayDisplay;
			this.removeStudentName = student;
		}
	
		confirmRemove(): void {
			this.removeStudentName.removePoint = !this.removeStudentName.removePoint;
			this.overlayDisplay = !this.overlayDisplay;
		}
	
		parseString(str: string): any {
			let arr: any[] = str.split('.');
			let studentDate: any = new Date(arr[2] as number, (arr[1] as number - 1), arr[0] as number);
			return studentDate as number;
		}
	
		newParse(): void {
			let strMin = this.minDate;
			let strMax = this.maxDate;
			let arrMin: any[] = strMin.split('.');
			let arrMax: any[] = strMax.split('.');
			let dateMinNew: any = new Date(arrMin[2] as number, (arrMin[1] as number - 1), arrMin[0] as number);
			let dateMaxNew: any = new Date(arrMax[2] as number, (arrMax[1] as number - 1), arrMax[0] as number);
			this.minDateMS = dateMinNew as number;
			this.maxDateMS = dateMaxNew as number;
		}
	
		sortName(): void {
			this.students.sort(function(a, b) {
			if (a.name > b.name) {
			return 1
		}
		return -1;
		});
		};

		sortSurName(): void {
			this.students.sort(function(a, b) {
			if (a.surname > b.surname) {
			return 1
		}
		return -1;
		});
		};

		sortDateMS(): void {
			this.students.sort(function(a, b) {
			if (a.dateMS > b.dateMS) {
			return 1
		}
		return -1;
		});
		};
		
		sortAverageRating(): void {
			this.students.sort(function(a, b) {
			if (a.averageRating < b.averageRating) {
			return 1
		}
		return -1;
		});
		};
}