// https://github.com/justinmahar/react-social-media-embed/blob/master/src/components/embeds/InstagramEmbed.tsx

import classNames from 'classnames';
import * as React from 'react';
import { DivProps } from 'react-html-props';

const borderRadius = 3;

// Embed Stages
const CHECK_SCRIPT_STAGE = 'check-script';

export interface InstagramEmbedProps extends DivProps {
  url: string;
  width?: string | number;
  height?: string | number;
  linkText?: string;
  captioned?: boolean;
  placeholderImageUrl?: string;
  placeholderSpinner?: React.ReactNode;
  placeholderSpinnerDisabled?: boolean;
  embedPlaceholder?: React.ReactNode;
  placeholderDisabled?: boolean;
  scriptLoadDisabled?: boolean;
  retryDelay?: number;
  retryDisabled?: boolean;
  igVersion?: string;
  debug?: boolean;
}

export const InstagramEmbed = ({
  url,
  width,
  height,
  linkText = 'View post on Instagram',
  captioned = false,
  placeholderImageUrl,
  placeholderSpinner,
  placeholderSpinnerDisabled = false,
  embedPlaceholder,
  placeholderDisabled = false,
  scriptLoadDisabled = false,
  retryDelay = 5000,
  retryDisabled = false,
  igVersion = '14',
  debug = false,
  ...divProps
}: InstagramEmbedProps): JSX.Element => {
  const [stage, setStage] = React.useState(CHECK_SCRIPT_STAGE);

  // Debug Output
  React.useEffect(() => {
    debug && console.log(`[${new Date().toISOString()}]: ${stage}`);
  }, [debug, stage]);

  // === === === === === === === === === === === === === === === === === === ===
  // Embed Stages
  // === === === === === === === === === === === === === === === === === === ===

  const urlWithNoQuery = url.replace(/[?].*$/, '');
  const cleanUrlWithEndingSlash = `${urlWithNoQuery}${urlWithNoQuery.endsWith('/') ? '' : '/'}`;

  const isPercentageWidth = !!width?.toString().includes('%');
  return (
    <div
      {...divProps}
      className={classNames('rsme-embed rsme-instagram-embed', divProps.className)}
      style={{
        overflow: 'hidden',
        width: width ?? undefined,
        height: height ?? undefined,
        borderRadius,
        ...divProps.style,
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${cleanUrlWithEndingSlash}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version={igVersion}
        data-instgrm-captioned={captioned ? captioned : undefined}
        data-width={isPercentageWidth ? '100%' : width ?? undefined}
        style={{
          width: 'calc(100% - 2px)',
        }}
      >
      </blockquote>
    </div>
  );
};