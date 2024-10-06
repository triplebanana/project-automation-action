// Copyright 2024 The Triple Banana Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import core from "@actions/core";
import GitHubProject from "github-project";

const AsyncFunction = Object.getPrototypeOf(async () => null).constructor;

function callAsyncFunction(args, source) {
  const fn = new AsyncFunction(...Object.keys(args), source);
  return fn(...Object.values(args));
}

const run = async () => {
  const script = core.getInput("script");
  callAsyncFunction({ core, GitHubProject }, script);
};

run();
