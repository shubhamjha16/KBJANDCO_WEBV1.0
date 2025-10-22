export interface ComponentProps {
    id: string;
    className?: string;
}

export interface HeaderProps extends ComponentProps {
    title: string;
}

export interface FooterProps {
    year: number;
}

export interface MainContentProps {
    content: string;
}