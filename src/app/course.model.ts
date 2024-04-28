// course.model.ts
import { Lesson } from './lesson.model'

export interface Course {
    courseId: number; //  from 'id'
    courseTitle: string; //  from 'name'
    courseCategory : string;
    coursePhotoFile: any; //  from 'image'
    courseDuration: string; //  from 'duration'
    courseLevel: string; //  from 'level'
    courseIsPremium: boolean; //  from 'premium'
    courseDescription: string; //  from 'description'
    courseLessons: Lesson[];
}
