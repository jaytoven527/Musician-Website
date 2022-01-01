// Page Region Types

export type AppNavigationItem = {
    href: string;
    title: string;
};

export type AppNavigation = {
    items: AppNavigationItem[]
}


// Contact Types

export type AppLink = {
    href: string;
    type: 'website' | 'email' | 'instagram' | 'facebook'
};
export type AppContactWidget = {
    link: AppLink;
}

export type AppPersonName = string;
export type AppEmail = string;

export type AppContactFormInput = {
    name: AppPersonName;
    email: AppEmail;
    message: string;
}

// Event/Scheduling Types

type SomeThingTheAppKnowsHowToHandle = 'alert("hello world");' | ((sourceEvent: MouseEvent) => void);
export type AppEventActionBehavior = 
    {
        type: 'button';
        onClick: SomeThingTheAppKnowsHowToHandle
    } | {
        type: 'link';
        href: string;
    } | {
        type: 'void'
    }

export type AppEventAction = {name: string} & AppEventActionBehavior;

export type AppEvent = {
    startDate: string;
    endDate: string;
    location?: string;
    actions: AppEventAction[];
};


export type AppTourEvent = AppEvent & {
    link: AppLink;
}

type AppLessonEvent = AppEvent & {
};

export type AppEventList<Event extends AppEvent> = {
    listTitle: string;
    events: Event[]
};


export type AppToursEventList = AppEventList<AppTourEvent>;
export type AppLessonsEventList = AppEventList<AppLessonEvent>;