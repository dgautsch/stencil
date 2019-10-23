import * as d from '../../declarations';
import ts from 'typescript';
import { isOutputTargetDistTypes } from '../../compiler/output-targets/output-utils';


export const getTsOptionsToExtend = (config: d.Config) => {
  const tsOptions: ts.CompilerOptions = {
    experimentalDecorators: true,
    declaration: config.outputTargets.some(isOutputTargetDistTypes),
    incremental: false,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    noEmitOnError: false,
    outDir: config.cacheDir,
    rootDir: config.srcDir,
    sourceMap: config.sourceMap,
    target: ts.ScriptTarget.ES2017,
  };
  return tsOptions;
};

export const TSCONFIG_NAME_FALLBACK = `tsconfig.fallback.json`;


export const getTsConfigFallback = (config: d.Config) => {
  const tsCompilerOptions: ts.CompilerOptions = {};

  const tsConfig: any = {
    compilerOptions: tsCompilerOptions,
    include: [
      config.srcDir + '/**/*'
    ]
  };
  return tsConfig;
};