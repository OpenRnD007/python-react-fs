import { ReactElement, ComponentType } from 'react';
import Header from './Header';
import Footer from './Footer';

/**
* Interface for props that might be required by the incoming component.
* Can be extended in the future to include additional props as needed.
*/
interface WithMainLayoutProps {
    // Define any common props that might be needed for wrapped components here
}

/**
* A Higher-Order Component (HOC) that wraps a given component with a main layout,
* consisting of a header, main content area, and footer.
*
* @param {ComponentType<P>} WrappedComponent - The component to be wrapped by the layout.
*/
const withMainLayout = <P extends WithMainLayoutProps>(WrappedComponent: ComponentType<P>) => {
    return (props: P): ReactElement => (
        <>
            <Header />
            <main>
                <WrappedComponent {...props} />
            </main>
            <Footer />
        </>
    );
};

export default withMainLayout