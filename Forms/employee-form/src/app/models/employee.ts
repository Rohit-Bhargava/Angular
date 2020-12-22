export class Employee {
    constructor(
    public id: number,
    public name: string,
    public gender: string,
    public email: string,
    public phoneNumber: number,
    public contactPreference: string,
    public dateOfBirth: Date,
    public department: string,
    public isActive: boolean,
    public photoPath: string,
    ) {}

}