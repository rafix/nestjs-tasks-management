import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}


[
    {
        "source": "Hello World",
        "target": "Hallo Welt",
        "sourceLanguage": "en",
        "targetLanguage": "de"
    },
    {
        "source": "Hello guys",
        "target": "Hallo Leute",
        "sourceLanguage": "en",
        "targetLanguage": "de"
    },
    {
        "source": "I walk to the supermarket",
        "target": "Ich gehe zum Supermarkt.",
        "sourceLanguage": "en",
        "targetLanguage": "de"
    }
]