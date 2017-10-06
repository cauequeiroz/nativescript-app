import { Injectable } from '@angular/core';

export class Video {

    day: number;
    title: string;
    url: string;
}

@Injectable()
export class Videos {

    private videos: Video[] = [
        { day: 1, title: '30 Minute at Home Strength Workout', url: 'https://www.youtube.com/watch?v=YdB1HMCldJY' },
        { day: 2, title: 'At Home Cardio and Core Workout', url: 'https://www.youtube.com/watch?v=11WLF24-5iM' },
        { day: 3, title: '30 Minute at Home Strength Workout', url: 'https://www.youtube.com/watch?v=8MPb0O9xApA' },
        { day: 4, title: '20 Minute at Home Flexibility Workout', url: 'https://www.youtube.com/watch?v=03JKamVnbfs' },
        { day: 5, title: 'At Home Cardio and Core Workout', url: 'https://www.youtube.com/watch?v=oCB6Cu8PEdI' },
        { day: 6, title: '30 Minute at Home Strength Workout', url: 'https://www.youtube.com/watch?v=YdB1HMCldJY' },
        { day: 7, title: 'At Home Cardio and Core Workout', url: 'https://www.youtube.com/watch?v=11WLF24-5iM' },
        { day: 8, title: '30 Minute at Home Strength Workout', url: 'https://www.youtube.com/watch?v=8MPb0O9xApA' },
        { day: 9, title: '20 Minute at Home Flexibility Workout', url: 'https://www.youtube.com/watch?v=03JKamVnbfs' },
        { day: 10, title: 'At Home Cardio and Core Workout', url: 'https://www.youtube.com/watch?v=oCB6Cu8PEdI' }
    ];

    getAllVideos(): Video[] {

        return this.videos;
    }
}