import { GlobalStyles } from 'components/GlobalStyles';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { FeedbackSection } from 'components/FeedbackSection/FeedbackSection';

export const App = () => {
  return (
    <main>
      <GlobalStyles />
      <PageTitle title="Feedback" />
      <FeedbackSection title="Please leave feedback" />
    </main>
  );
};
