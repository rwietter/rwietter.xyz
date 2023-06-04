import SEO from 'components/SEO';
import { ContentLayout } from 'features/ui/layouts';
import { PageTitle } from 'globals/components';
import { useCallback } from 'react';
import { operationSystem } from './data/so';
import { tools } from './data/tools';

import * as S from './styles';
import { Terminal } from './components/terminal';
import { SetupMapper } from './components/setupmapper';
import { Search } from './features/search';
import { useRealTimeSearch } from './hooks/useSearch';
import { customization } from './data/customization';

const Setup = () => {
  const { handleInputChange, results } = useRealTimeSearch(
    [...operationSystem, ...tools, ...customization],
  );

  const SetupInformation = useCallback(() => (
    results.length > 0 ? (
      <SetupMapper title="Search Results" data={results} />
    ) : (
      <>
        <SetupMapper title="Operational System" id="desk" data={operationSystem} />
        <SetupMapper title="Softwares" id="softwares" data={tools} />
        <Terminal text="sudo pacman -S docker docker-compose cronie git zsh wezterm vnstat tig dzen2" />
        <Terminal text="paru -S visual-studio-code-bin google-chrome-dev" />
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
          <PageTitle color="secondary" title="SO and Software Development Setup" />
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
