import SEO from 'components/SEO';
import { ContentLayout } from 'features/ui/layouts';
import { PageTitle } from 'globals/components';
import { OperationSystem } from './data/so';
import { tools } from './data/tools';

import * as S from './styles';

const Setup = () => (
  <>
    <SEO
      title="Setup | Maurício Witter"
      content="website"
      url="https://rwietterc.xyz/setup"
      description="Operational System and Software Development Setup for Development and Productivity."
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <ContentLayout layout="small">
      <S.Container>
        <PageTitle color="secondary" title="SO and Software Development Setup" />
        <S.Content>
          <S.SearchContent>
            <nav>
              <a href="#desk">#Desk</a>
              <a href="#softwares">#Softwares</a>
              <a href="customization">#Customization</a>
            </nav>

            <S.InputSearch>
              <span>Pesquise por um item</span>
              <input type="text" placeholder="Ex: vscode theme" />
            </S.InputSearch>
          </S.SearchContent>
          <S.ItemsContent>
            <S.SystemOS>
              <h2 id="desk">Operational System</h2>
              <ul>
                {OperationSystem.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    {': '}
                    {item.type}
                  </li>
                ))}
              </ul>
            </S.SystemOS>

            <S.SystemOS>
              <h2 id="softwares">Softwares</h2>
              <ul>
                {tools.map((item) => (
                  <li key={item.name}>
                    <S.SoftwareLink href={item.url} target="_blank" rel="noreferrer">{item.name}</S.SoftwareLink>
                  </li>
                ))}
              </ul>
              <S.Terminal className="language-bash">
                <code className="language-bash">
                  <span>
                    sudo pacman -S docker docker-compose cronie git zsh wezterm vnstat tig dzen2
                  </span>
                </code>
              </S.Terminal>
              <S.Terminal className="language-bash">
                <code className="language-bash">
                  <span>paru -S visual-studio-code-bin google-chrome-dev</span>
                </code>
              </S.Terminal>
            </S.SystemOS>
          </S.ItemsContent>
          <section />
        </S.Content>
      </S.Container>
    </ContentLayout>
  </>
);

export { Setup };
