import SEO from 'components/SEO';
import { ContentLayout } from 'features/ui/layouts';
import { useCallback } from 'react';
import { operationSystem } from './data/so';
import { tools } from './data/tools';

import * as S from './styles';
import { Terminal } from './components/terminal';
import { SetupMapper } from './components/setupmapper';
import { Search } from './features/search';
import { useRealTimeSearch } from './hooks/useSearch';
import { customization } from './data/customization';
import { AUR, PACMAN } from './data/terminal';

const Setup = () => {
  const { handleInputChange, results } = useRealTimeSearch(
    [...operationSystem, ...tools, ...customization],
  );

  const SetupInformation = useCallback(() => (
    results.length > 0 ? (
      <SetupMapper title="Search Results" id="results" data={results} />
    ) : (
      <>
        <SetupMapper title="Operational System" id="desk" data={operationSystem} />
        <SetupMapper title="Softwares" id="softwares" data={tools} />
        <Terminal text={PACMAN} />
        <Terminal text={AUR} />
        <SetupMapper title="Customization" id="customization" data={customization} />
      </>
    )
  ), [results]);

  return (
    <>
      <SEO
        title="Setup | Maurício Witter"
        content="website"
        url="https://rwietterc.xyz/setup"
        description="Operational System and Software Development Setup for Development and Productivity."
        image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
      />
      <ContentLayout layout="small">
        <S.Main>
          <S.Content>
            <Search handleInputChange={handleInputChange} />
            <SetupInformation />
            <section />
          </S.Content>
        </S.Main>
      </ContentLayout>
    </>
  );
};

export { Setup };
