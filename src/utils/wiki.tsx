import React from 'react';
import { getDifficultyWikiColor, getLevelWikiColor } from './colors';

function generateWikiCodes(info: Course.Information): React.ReactElement {
  return (
    <div>
      <div>{`|>|>|>|BGCOLOR(#C7E7FF):''${info.course}''|`}</div>
      <div>{`|01|${info.name1}|BGCOLOR(${getDifficultyWikiColor(
        info.difficulty1
      )}):${info.difficulty1}|BGCOLOR(${getLevelWikiColor(info.difficulty1)}):${
        info.level1
      }|`}</div>
      <div>{`|02|${info.name2}|BGCOLOR(${getDifficultyWikiColor(
        info.difficulty2
      )}):${info.difficulty2}|BGCOLOR(${getLevelWikiColor(info.difficulty2)}):${
        info.level2
      }|`}</div>
      <div>{`|FINAL|${info.name3}|BGCOLOR(${getDifficultyWikiColor(
        info.difficulty3
      )}):${info.difficulty3}|BGCOLOR(${getLevelWikiColor(info.difficulty3)}):${
        info.level3
      }|`}</div>
    </div>
  );
}

export default generateWikiCodes;
