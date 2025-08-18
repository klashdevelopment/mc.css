import React from "react";

export type Sizing = 'sm' | 'md' | 'lg';

export function Container({
    children,
    size = 'md',
    className = '',
    contentClassName = '',
}: {
    children: React.ReactNode;
    size?: Sizing;
    className?: string;
    contentClassName?: string;
}) {
    return (
        <div className={`mc-container ${size} ${className}`}>
            <div className="mc-header"></div>
            <div className={`mc-content ${contentClassName}`}>
                {children}
            </div>
            <div className="mc-footer"></div>
        </div>
    );
}


interface ABDivProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'up' | 'down' | 'left' | 'right';
    size?: Sizing;
}
const ARROW_BUTTON_DIV = React.forwardRef<HTMLDivElement, ABDivProps>(
    ({ direction, size, ...props }, ref) => {
        return <div {...props} ref={ref} data-direction={direction} data-size={size} />;
    }
);
export function ArrowButton({
    direction = 'left',
    size = 'md',
    onClick,
    className = '',
    ...gleep
}: {
    direction?: 'up' | 'down' | 'left' | 'right';
    size?: Sizing;
    onClick: () => void;
    className?: string;
}) {
    return (
        <ARROW_BUTTON_DIV
            className={`mc-button-arrow ${className}`}
            direction={direction}
            size={size}
            onClick={onClick}
            {...gleep}
        />
    );
}

export type BadgeTypes = 'crafter_slot' | 'effect' | 'effect_ambient' | 'effect_small' | 'gold_challenge' | 'gold_goal' | 'gray_challenge' | 'gray_goal' | 'inventory_slot' | 'item_slot' | 'recipe_slot' | 'slot' | 'slot_shadow';

interface BadgeDivProps extends React.HTMLAttributes<HTMLDivElement> {
    badge: BadgeTypes;
};
const BADGE_DIV = React.forwardRef<HTMLDivElement, BadgeDivProps>(
    ({ badge, ...props }, ref) => {
        return <div {...props} ref={ref} data-badge={badge} />;
    }
);
export function Badge({
    badge,
    className = '',
    onClick,
    children,
    ...gleep
}: {
    badge: BadgeTypes;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}) {
    return (
        <BADGE_DIV
            className={`mc-badge ${className}`}
            badge={badge}
            onClick={onClick}
            {...gleep}
        >
            {children}
        </BADGE_DIV>
    );
}

export function Tab({
    children,
    className = '',
    active = false,
    onClick,
    ...gleep
}: {
    children: React.ReactNode;
    className?: string;
    active?: boolean;
    onClick?: () => void;
}) {
    return (
        <div className={`mc-tab ${active ? 'active' : ''} ${className}`} onClick={onClick} {...gleep}>
            {children}
        </div>
    );
}

export type TabbedWindowClassName = {
    tabbedWindow?: string;
    tabsLeft?: string;
    tabsRight?: string;
    tabsTop?: string;
    tabsBottom?: string;
    content?: string;
};
export function TabbedWindow({
    children,
    className = '',
    tabsLeft = null,
    tabsRight = null,
    tabsTop = null,
    tabsBottom = null,
    ...gleep
}: {
    children: React.ReactNode;
    className?: string | TabbedWindowClassName;
    tabsLeft?: React.ReactNode | null;
    tabsRight?: React.ReactNode | null;
    tabsTop?: React.ReactNode | null;
    tabsBottom?: React.ReactNode | null;
}) {
    var classNameFixed: TabbedWindowClassName = {};
    if (typeof className === 'string') {
        classNameFixed = {
            tabbedWindow: className,
            tabsLeft: '',
            tabsRight: '',
            tabsTop: '',
            tabsBottom: '',
            content: ''
        };
    } else {
        classNameFixed = {
            tabbedWindow: className.tabbedWindow || '',
            tabsLeft: className.tabsLeft || '',
            tabsRight: className.tabsRight || '',
            tabsTop: className.tabsTop || '',
            tabsBottom: className.tabsBottom || '',
            content: className.content || ''
        };
    }
    return (
        <div className={`mc-tabbed-window ${classNameFixed.tabbedWindow}`} {...gleep}>
            {tabsLeft && <div className={`mc-tw-left ${classNameFixed.tabsLeft}`}>{tabsLeft}</div>}
            <div className="mc-tw-center">
                {tabsTop && <div className={`mc-tw-top ${classNameFixed.tabsTop}`}>{tabsTop}</div>}
                <div className={`mc-tw-content ${classNameFixed.content}`}>
                    {children}
                </div>
                {tabsBottom && <div className={`mc-tw-bottom ${classNameFixed.tabsBottom}`}>{tabsBottom}</div>}
            </div>
            {tabsRight && <div className={`mc-tw-right ${classNameFixed.tabsRight}`}>{tabsRight}</div>}
        </div>
    );
}

export function Tooltip({
    children,
    className = '',
    contentClassName = '',
    ...gleep
}: {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}) {
    return (
        <div className="mc-tooltip">
            <div className="mc-tooltip-header"></div>
            <div className="mc-tooltip-content mc-text-shadow">
                {children}
            </div>
            <div className="mc-tooltip-footer"></div>
        </div>
    );
}

export function Window({
    children,
    className = '',
    contentClassName = '',
    title,
    ...gleep
}: {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
    title?: React.ReactNode;
}) {
    return (
        <div className={`mc-window ${className}`} {...gleep}>
            {title && <div className="mc-window-title">
                {title}
            </div>}
            <div className={`mc-window-content ${contentClassName}`}>
                {children}
            </div>
        </div>
    );
}

export function Button({
    children,
    className = '',
    onClick,
    disabled = false,
    ...gleep
}: {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}) {
    return (
        <div className={`mc-button ${className} ${disabled ? 'disabled' : ''}`} onClick={onClick} {...gleep}>
            {children}
        </div>
    );
}

export function SquareButton({
    children,
    className = '',
    size = 'md',
    onClick,
    ...gleep
}: {
    children: React.ReactNode;
    className?: string;
    size?: Sizing;
    onClick?: () => void;
}) {
    return (
        <div className={`mc-button-square ${size} ${className}`} onClick={onClick} {...gleep}>
            {children}
        </div>
    );
}

export function Input({
    className = '',
    value,
    onChange,
    placeholder = '',
    type = 'text',
    ...gleep
}: {
    className?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
}) {
    return (
        <div className={`mc-input ${className}`}>
            <div className="mc-input-inner">
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    type={type}
                    {...gleep}
                />
            </div>
        </div>
    );
}

export function Typography({
    children,
    className = '',
    size = 'md',
    shadow = false,
    ...gleep
}: {
    children: React.ReactNode;
    className?: string;
    size?: Sizing;
    shadow?: boolean;
}) {
    return (
        <div className={`mc-text-${size} ${shadow ? 'mc-text-shadow' : ''} ${className}`} {...gleep}>
            {children}
        </div>
    );
}