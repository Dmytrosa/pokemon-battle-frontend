import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * @param {boolean} shouldBlock - If true, blocks route changes
 * @param {function} onSurrender - Function called when the user confirms exit (surrender)
 */
export default function useWarnIfBattleOngoing(shouldBlock, onSurrender) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!shouldBlock) return;

        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = ''; // Standard browser prompt
        };

        const unblock = () => {
            if (!shouldBlock) return;

            // TODO: find a way to block routing via browser

            const confirmLeave = true;
            // window.confirm(
            //     'If you leave the battle now, you will automatically lose. Are you sure?'
            // );
            if (confirmLeave) {
                onSurrender?.();
                navigate(location.pathname, { replace: true });
            }
        };

        // Add listeners for route changes and tab closure
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            unblock();
        };
    }, [shouldBlock, onSurrender, navigate, location.pathname]);
} 
