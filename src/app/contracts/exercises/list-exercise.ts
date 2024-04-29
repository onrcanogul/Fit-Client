export class ListExercises{
    totalCount!: number;
    entity!:Exercise[];

}

export class Exercise {
    id!:string;
    name!: string;
    minute!: number;
    calorie!: number;
}